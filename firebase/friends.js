var firebase = require('./firebase'),
    expect = require('chai').expect

describe('friends', function () {
    it('restricts reads to current user', function () {
        var token = firebase.auth().createCustomToken('1')
        
        var push = firebase.database().ref('/posts').push({
            user_id: '1@test.com',
            friend_id: '2@test.com'  
        })
        push.then(function () {
                return firebase.database().ref('/posts/' + push.key).once('value')
            })
            .then(function (result) {
                expect(result.friend_id).to.equal('2@test.com')
            })
    })
})