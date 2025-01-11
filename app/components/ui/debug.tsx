export function Debug({ children }: { children: any }) {
  return <pre>{JSON.stringify(children, null, 2)}</pre>;
}
