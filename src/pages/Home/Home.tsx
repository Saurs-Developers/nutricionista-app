import { FilePdf, MagnifyingGlass } from "phosphor-react"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Typography } from "../../components/Typography"

export default function Home() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4">
        <Typography type="heading" variant="xxs">
          Heading XXS
        </Typography>
        <Typography type="heading" variant="xs">
          Heading XS
        </Typography>
        <Typography type="heading" variant="sm">
          Heading SM
        </Typography>
        <Typography type="heading" variant="md">
          Heading MD
        </Typography>
        <Typography type="heading" variant="lg">
          Heading LG
        </Typography>
        <Typography type="heading" variant="xl">
          Heading XL
        </Typography>
        <Typography type="heading" variant="xxl">
          Heading XXL
        </Typography>
        <Typography type="body" variant="xs">
          Body XS
        </Typography>
        <Typography type="body" variant="sm">
          Body SM
        </Typography>
        <Typography type="body" variant="md">
          Body MD
        </Typography>
        <Typography type="body" variant="lg">
          Body LG
        </Typography>
        <Typography type="body" variant="xl">
          Body XL
        </Typography>
      </div>
      <Button variant="filled">Button</Button>
      <Button variant="filled">
        Fazer download <FilePdf size={24} />
      </Button>
      <Input placeholder="Input" />
      <Input label="Label" placeholder="Labeled Input" />
      <Input searchIcon label="Search icon" placeholder="Search icon" />
    </div>
  )
}
