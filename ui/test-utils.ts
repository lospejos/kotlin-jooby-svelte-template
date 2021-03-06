import {SvelteComponent} from 'svelte'
import {get} from 'svelte/store'
import {_} from 'svelte-i18n'
import {act, fireEvent} from '@testing-library/svelte'

export function prop(component: SvelteComponent, propName: string) {
  return component.$$.ctx[component.$$.props[propName]]
}

export async function update(component: SvelteComponent, propName: string, value: any) {
  await act(() => component.$set({[propName]: value}))
}

export async function sendEvent(element: Element, event: string) {
  await act(() => fireEvent(element, new Event(event)))
}

export function $_(key: string) {
  return get(_)(key)
}

export async function change() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    })
  })
}
