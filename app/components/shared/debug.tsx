export function Debug({ children }: { children: React.ReactNode | any }) {
  return <pre className="text-xs">{JSON.stringify(children, null, 2)}</pre>;
}
