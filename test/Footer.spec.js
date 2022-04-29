import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'
import SocialMediaIcons from '@/components/SocialMediaIcons.vue'

describe('Footer.vue', () => {

  afterAll(() => {
    jest.clearAllMocks();
  });

  const wrapper = shallowMount(Footer);

  test('Footer is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('SocialMediaIcons is a Vue instance', () => {
    const wrapper = shallowMount(SocialMediaIcons)
    
    expect(wrapper.vm).toBeTruthy()
  })

  test('Should scroll to top', async () => {
    window.scrollTo = jest.fn();

    const spy = jest.spyOn(window, 'scrollTo')
    await wrapper.vm.$nextTick();

    const backToTop = wrapper.find('.back-to-top');
    backToTop.trigger('click');

    expect(spy).toHaveBeenCalled();
    jest.restoreAllMocks();

    spy.mockRestore();
  })
})

