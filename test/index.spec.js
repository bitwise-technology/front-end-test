import { shallowMount } from '@vue/test-utils'
import UserSearchInput from '@/components/UserSearchInput.vue'
import SocialMediaIcons from '~/components/SocialMediaIcons.vue';
import Home from '~/pages/index.vue';

describe('Index.vue', () => {
  test('Home is a Vue instance', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.vm).toBeTruthy()
  })

  test('UserSearchInput is a Vue instance', () => {
    const wrapper = shallowMount(UserSearchInput)
    expect(wrapper.vm).toBeTruthy()
  })

  test('SocialMediaIcons is a Vue instance', () => {
    const wrapper = shallowMount(SocialMediaIcons)
    expect(wrapper.vm).toBeTruthy()
  })
})