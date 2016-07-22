var firebase = require('./firebase'),
    expect = require('chai').expect

describe('basic data test', function () {
    it('saves returns a promise after pushing', function () {
        return firebase.database().ref('posts/1').set({
            message: 'test'
        }).then(path => {
            return firebase.database().ref('posts/1').once('value')
        }).then(snapshot => {
            expect(snapshot.val().message).to.equal('test')
        })
    })
})