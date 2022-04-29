import { shallowMount } from '@vue/test-utils'
import UserSearchInput from '@/components/UserSearchInput.vue'
import SocialMediaIcons from '~/components/SocialMediaIcons.vue'
import UserInfo from '~/pages/UserInfo.vue'

const makeFetchResp = (value) => ({ json: () => Promise.resolve(value) })

global.fetch = jest
  .fn()
  .mockResolvedValueOnce(makeFetchResp({ data: { search: { nodes: [200] } } }))
  .mockResolvedValueOnce(makeFetchResp({ data: { search: { nodes: [] } } }))
  .mockResolvedValue(makeFetchResp(jest.fn().mockRejectedValue()))

describe('UserInfo.vue', () => {
  test('UserInfo is a Vue instance', () => {
    const wrapper = shallowMount(UserInfo)
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
});
