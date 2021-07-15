import { RptModule } from './rpt.module';

describe('RptModule', () => {
    let rptModule: RptModule;

    beforeEach(() => {
        rptModule = new RptModule();
    });

    it('should create an instance', () => {
        expect(rptModule).toBeTruthy();
    });
});
