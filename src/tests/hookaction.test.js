import moxios from 'moxios';
import {sampleApiCall} from '../action/HooksAction';

describe('Moxios test', ()=> {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(()=>{
        moxios.uninstall();
    });

    it('call the sampleApiCall  call back on axios response', async ()=>{
        const data = "Test";
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response: data,
            });
        });
        //Create Mock for callback arg
        const mockSetSampleApiCall = jest.fn();
        await sampleApiCall(mockSetSampleApiCall);

        //see mock was run with correct argument
        expect(mockSetSampleApiCall).toHaveBeenCalledWith(data)
    })
})