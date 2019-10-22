import 'should'
import fixExtensions from './index'

it('should leave this alone', () => {
    const data = `
    import "module";
    import def, { this, will, be, interesting } from 'big/dir/no-change'
    more JS here...
    `

    fixExtensions(data).should.eql(data)
})

it('should do a simple fix', () =>
    fixExtensions(`
        import "./local/module";
        import "module";
        import "./local/module";
        import "module";
        more JS here...
    `).should.eql(`
        import './local/module.js';
        import "module";
        import './local/module.js';
        import "module";
        more JS here...
    `)
)


it('should do a more complicated fix', () =>
    fixExtensions(`
    import 'no'
    import './yes'
    import '../here/yes'
    import wow from './yes'
    import default, {
        this,
        will,
        be, 
        harder
    } from './big/dir/yes'
    import something from "no-change"

    more JS here...
    `).should.eql(`
    import 'no'
    import './yes.js'
    import '../here/yes.js'
    import wow from './yes.js'
    import default, {
        this,
        will,
        be, 
        harder
    } from './big/dir/yes.js'
    import something from "no-change"

    more JS here...
    `)
)