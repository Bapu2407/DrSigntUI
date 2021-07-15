import { ActivateDeactivateModule } from './activate-deactivate.module';

describe('ActivateDeactivateModule', () => {
  let ActivateDeactivateModule: ActivateDeactivateModule;

  beforeEach(() => {
    ActivateDeactivateModule = new ActivateDeactivateModule();
  });

  it('should create an instance', () => {
    expect(ActivateDeactivateModule).toBeTruthy();
  });
});
