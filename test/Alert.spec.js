import { shallowMount } from '@vue/test-utils'
import Alert from '@/components/Alert.vue'
import SocialMediaIcons from '@/components/SocialMediaIcons.vue'

describe('Alert.vue', () => {
  const wrapper = shallowMount(Alert);

  test('Alert is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('SocialMediaIcons is a Vue instance', () => {
    const wrapper = shallowMount(SocialMediaIcons)
    
    expect(wrapper.vm).toBeTruthy()
  })

  test('Should return modal true', () => {
    const modal = true;
    wrapper.vm.$options.watch.modal.call(wrapper.vm, modal);
    expect(wrapper.vm.dialog).toBe(modal);
  })
})