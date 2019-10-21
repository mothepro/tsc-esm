import 'should'
import fixExtensions from './index'

it('Leave this alone', () => {
    const data = 'blah, 123\nnothing fun here.'
    fixExtensions(data).should.eql(data)
})
