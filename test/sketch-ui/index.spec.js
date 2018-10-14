/* global describe:false, it:false, context:false */
const { assert } = require('chai')
const { createDialog } = require('../../src/sketch-ui/index')
const { pasteBoardWrite } = require('../../src/sketch-ui/utils')

/* eslint-disable no-unused-vars */
describe('UI', () => {
  describe('#createDialog()', () => {
    context('when create dialog without "title" or "message" argument', () => {
      it('Should throw Error', () => {
        assert.throws(() => {
          createDialog({ message: 'No title' })
          createDialog({ title: 'No message' })
          createDialog()
        }, Error)
      })
    })

    context('when set buttons on the dialog', () => {
      it('Should throw Error', () => {
        assert.throws(() => {
          createDialog({
            title: 'title',
            message: 'No title',
            buttons: 'ssdkkkw',
          })
        }, Error)
      })
    })
  })

  describe('#pasteBoardWrite()', () => {
    context('when set data into pasteboard', () => {
      it('Should throw Error', () => {
        assert.throws(() => {
          pasteBoardWrite({ data: 'dummy data' }, 'context')
        }, Error)
      })
    })
  })
})
/* eslint-enable no-unused-vars */
