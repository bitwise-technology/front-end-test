import { shallowMount } from '@vue/test-utils'
import vueCustomScrollbar from 'vue-custom-scrollbar';
import RepositoriesTable from '@/components/RepositoriesTable.vue'

describe('RepositoriesTable.vue', () => {
  test('RepositoriesTable is a Vue instance', () => {
    const wrapper = shallowMount(RepositoriesTable)
    expect(wrapper.vm).toBeTruthy()
  })

  test('vueCustomScrollbar is a Vue instance', () => {
    const wrapper = shallowMount(vueCustomScrollbar)
    expect(wrapper.vm).toBeTruthy()
  })
})