import { createComponent } from './component'

type CreateNamespaceReturn = [
  ReturnType<typeof createComponent>
]

export function createNamespace(name: string): CreateNamespaceReturn {
  name = 'pl-' + name
  return [createComponent(name)]
}
