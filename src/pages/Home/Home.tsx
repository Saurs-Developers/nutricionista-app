import { useState } from "react"
import { FilePdf } from "phosphor-react"

import { Button } from "../../components/Button"
import { Card } from "../../components/Card/Card"
import { Input } from "../../components/Input"
import { ProgressBar } from "../../components/ProgressBar/ProgressBar"
import { Select } from "../../components/Select"
import { Typography } from "../../components/Typography"

export default function Home() {
  const [value, setValue] = useState(0)

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
      <Button variant="filled">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="filled">
        Icon <FilePdf size={24} />
      </Button>
      <Input placeholder="Input" />
      <Input label="Label" placeholder="Labeled Input" />
      <Input searchIcon label="Search icon" placeholder="Search icon" />
      <Select
        options={new Array(4).fill(0).map((_, i) => {
          return (
            <option key={i} value="test">
              Option {i + 1}
            </option>
          )
        })}
      />
      <Select
        options={new Array(4).fill(0).map((_, i) => {
          return (
            <option key={i} value="test">
              Option {i + 1}
            </option>
          )
        })}
        label="Labeled select"
      />
      <div>Valor da barra</div>
      <input
        type="number"
        onChange={(e) => setValue(Number(e.target.value))}
        className="border-2 border-brand-primary p-2 rounded-md w-full"
      />
      <ProgressBar value={value} />
      <Card
        image={<Card.Image src="http://placekitten.com/200/200" />}
        info={
          <>
            <Card.Title>Treino A Quadriceps</Card.Title>
            <Card.Subtitle>Treino A Quadriceps</Card.Subtitle>
          </>
        }
      />
      <Card
        info={
          <>
            <Card.Title>Dieta A</Card.Title>
            <Card.Subtitle>Dias de treino</Card.Subtitle>
          </>
        }
      />
      <Card
        info={
          <>
            <Card.Title>Refeição 1</Card.Title>
            <Card.Subtitle>8 - 9h</Card.Subtitle>
            <Card.Description>
              <span>
                130g de tapioca ou 250g de batata doce ou 200g de mandioca ou
                220g de cuscuz
              </span>
              <span>
                4 ovos inteiros, cozidos mexidos ou em omelete ou 180g de atum
                ou 150g de carne moída
              </span>
              <span>1 Porção de fruta</span>
              <span>100ml de café puro</span>
            </Card.Description>
          </>
        }
      />
      <Card
        info={
          <>
            <Card.Title>Omelete com whey</Card.Title>
            <Card.Description>Omelete, whey</Card.Description>
          </>
        }
        action={
          <>
            <Button variant="outlined">Excluir</Button>
            <Button variant="danger">Editar</Button>
          </>
        }
      />
    </div>
  )
}
