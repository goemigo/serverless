const { authenticated_user } = require('./steps/given');
let init = require('./steps/init');
let idToken;

dscribe('Given an authenticated user', () => {
    init(); //load environment variables from .env
    beforeAll(async () => {
        init();
        let user = await authenticated_user();
        idToken = user.AuthenticationResult.IdToken;
        console.log(idToken);
    });

    describe('When invoke POST /notes endpoint', () => {
        it('Should create a new note', async () => {
            expect(true).toBe(true);
        })
    });
});