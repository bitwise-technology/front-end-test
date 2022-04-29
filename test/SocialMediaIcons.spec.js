import { shallowMount } from '@vue/test-utils'
import SocialMediaIcons from '@/components/SocialMediaIcons.vue'

describe('SocialMediaIcons.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(SocialMediaIcons)
    expect(wrapper.vm).toBeTruthy()
  })
})