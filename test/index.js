import assert from 'assert'
import { transpile } from '../src'
import { fs } from '../src/libs'
import recursive from 'recursive-readdir'

describe('Testing Webflow Transformations...', () => {
  describe('Webflow -> React tests...', () => {
    it('should put input in the output', async () => {
      await transpile({
        input: 'test/data/input0',
        output: 'test/data/output0',
        git: false
      })

      recursive('test/data/output0', (err, files) => {
        assert.equal(files.length, 44)
      })
    })
  })
  describe('Webflow -> React Native tests...', () => {
    it('should put input in the output', async () => {
      await transpile({
        input: 'test/data/input0',
        output: 'test/data/output1',
        git: false
      })

      recursive('test/data/output1', (err, files) => {
        assert.equal(files.length, 44)
      })
    })
  })
})
