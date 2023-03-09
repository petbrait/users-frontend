import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Input from "@/components/Input";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const PetForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataForm: any) => {
    console.log(dataForm);
    router.push("/home");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Input
              type="text"
              register={register}
              errors={errors}
              keyName="nick_name"
              placeholder="Nombre o apodo"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              type="text"
              register={register}
              errors={errors}
              keyName="race"
              placeholder="Raza"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              type="email"
              register={register}
              errors={errors}
              keyName="email"
              placeholder="Correo electronico"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              type="password"
              register={register}
              errors={errors}
              keyName="password"
              placeholder="Contraseña"
            />
          </Grid>
        </Grid>
        <Button
          sx={{ marginTop: "30px", color: "#fff" }}
          type="submit"
          variant="contained"
          size="medium"
        >
          Crear cuenta
        </Button>
      </form>
    </Box>
  );
};

export default PetForm;
