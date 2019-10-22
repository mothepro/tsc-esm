#!/usr/bin/env node
const start = Date.now()
import { promisify } from 'util'
import { readFile as readFileCb, writeFile as writeFileCb } from 'fs'
import * as globCb from 'glob'
import fixExtensions from './index'

const glob = promisify(globCb)
const readFile = promisify(readFileCb)
const writeFile = promisify(writeFileCb)

const files = new Set<string>()

/** Gets all the files passed into the program */
async function getFiles() {
    for (const arg of process.argv.slice(2))
        for (const filename of await glob(arg))
            files.add(filename)
}

/** Runs all the files thru the processor and writes the files */
async function processFiles() {
    const writePromises: Promise<void>[] = []
    for (const filename of files)
        writePromises.push(writeFile(filename, fixExtensions(await readFile(filename))))
    return Promise.all(writePromises)
}

getFiles()
    .then(processFiles)
    .then(() => console.log(`Successfuly fixed extensions (${Date.now() - start}ms)`, files))
    .catch(err => console.error('Failed to fix extensions:', err))
