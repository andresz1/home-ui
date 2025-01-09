export const basic = `
<Button>Basic</Button>
`;

export const variant = `
<div className="flex flex-wrap gap-md">
  <Button variant="solid">
    Solid
  </Button>
  <Button variant="outlined">
    Outlined
  </Button>
  <Button variant="ghost">
    Ghost
  </Button>
  <Button variant="contrast">
    Contrast
  </Button>
</div>
`;

export const disabled = `
<Button disabled>Disabled</Button>
`;

export const intent = `
<div className="inline-flex w-full flex-wrap gap-md">
  <Button intent="main">
    main button
  </Button>
  <Button intent="support">
    support button
  </Button>
  <Button intent="accent">
    accent button
  </Button>
  <Button intent="basic">
    basic button
  </Button>
  <Button intent="success">
    success button
  </Button>
  <Button intent="alert">
    alert button
  </Button>
  <Button intent="danger">
    danger button
  </Button>
  <Button intent="info">
    info button
  </Button>
  <Button intent="neutral">
    neutral button
  </Button>
  <Button intent="surface">
    surface button
  </Button>
</div>
`;

export const loading = `
<Button isLoading>Button</Button>
`;

export const loadingText = `
<Button loadingText="Loading" isLoading>Button</Button>
`;

export const shape = `
<div className="flex gap-lg">
  <Button shape="rounded">Button</Button>
  <Button shape="square">Button</Button>
  <Button shape="pill">Button</Button>
</div>
`;

export const size = `
() => {
  return (
    <div className="flex gap-lg">
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
    </div>
  )
}
`;

export const link = `
<Button asChild>
  <a href="/">
    Link
  </a>
</Button>
`;

export const toggle = `
() => {
  const [pressed, setPressed] = React.useState(false);
  const toggle = () => setPressed(!pressed);

  return (
    <Button aria-pressed={pressed} onClick={toggle} design={pressed ? 'filled' : 'outlined'}>
      Toggle
      {pressed && (
        <Icon>
          <FiCheck />
        </Icon>
      )}
    </Button>
  )
}
`;
