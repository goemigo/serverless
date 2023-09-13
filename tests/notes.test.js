const { authenticated_user } = require('./steps/given');
let init = require('./steps/init');
let { invoke_createNote } = require('./steps/when');
let idToken;

describe('Given an authenticated user', () => {
    init(); //load environment variables from .env
    beforeAll(async () => {
        init();
        let user = await authenticated_user();
        idToken = user.AuthenticationResult.IdToken;
        console.log(idToken);
    });

    describe('When invoke POST /notes endpoint', () => {
        it('Should create a new note', async () => {
            // expect(true).toBe(true); //mock test
            const body = {
                id: "1001",
                title: "note to test jest",
                body: "this is the test body"
            }
            let result = await invoke_createNote({idToken, body});
            expect(result.statusCode).toEqual(201);
            expect(result.body).not.toBeNull();
        })
    });
});