import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first Test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should have h1 that says Users', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window) {  //this is a callback funciton, which means the test is asynchronus.
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Users');
            done(); //since this test is asynchronous, you must include the done function in the "it" and then call it when the test is complete. this tells the test runner to evaluate the expectation
            window.close();
        });
    });
});
