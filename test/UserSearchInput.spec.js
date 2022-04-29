import { shallowMount } from '@vue/test-utils'
import UserSearchInput from '@/components/UserSearchInput.vue'

const makeFetchResp = (value) => ({ json: () => Promise.resolve(value) });

global.fetch = jest
  .fn()
  .mockResolvedValueOnce(makeFetchResp({data: { search: { nodes: [200]}}}))
  .mockResolvedValueOnce(makeFetchResp({data: { search: { nodes: []}}}))
  .mockResolvedValue(makeFetchResp(jest.fn().mockRejectedValue()))

describe('UserSearchInput.vue', () => {
  test('UserSearchInput is a Vue instance', () => {
    const wrapper = shallowMount(UserSearchInput)
    expect(wrapper.vm).toBeTruthy()
  })

  test('Should get users', async () => {
    const wrapper = shallowMount(UserSearchInput)
    const user = 'Maikoncg';
  
    await wrapper.vm.getUsers(user);

    expect(wrapper.vm.users[0]).toEqual(200);
  })

  test('Should send an event to modal when there is no users', async () => {
    const wrapper = shallowMount(UserSearchInput)
    const user = 'abcdefghijklomn';
  
    await wrapper.vm.getUsers(user);
    expect(wrapper.vm.users).toEqual([]);
  })

  test('Should clear items of UserSearchInput', async () => {
    const wrapper = shallowMount(UserSearchInput)
    const user = '';
  
    await wrapper.vm.getUsers(user);

    expect(wrapper.vm.users).toEqual([]);
  })
  
  test('Should return users empty when there is an error', async () => {
    const wrapper = shallowMount(UserSearchInput)
    const user = 'Maikoncg';
  
    await wrapper.vm.getUsers(user);
    expect(wrapper.vm.users).toEqual([]);
  })
});