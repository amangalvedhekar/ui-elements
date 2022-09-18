describe('Example', () => {
  beforeAll(async () => {
    if(device.getPlatform() === 'ios') {
      await device.launchApp();
      await device.openURL({
        url: 'com.anirudhm.uielements://expo-development-client/?url=http%3A%2F%2F192.168.2.39%3A8081'
      });
    } else {
      await device.launchApp();
    }
  });

  beforeEach(async () => {
    await device.reloadReactNative();

  });

  it('should render form', async () => {
    await expect(element(by.id('fName-input-field'))).toBeVisible();
  });

});
