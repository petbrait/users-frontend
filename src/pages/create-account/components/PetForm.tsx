import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { createUser, createProfile } from "@/core/api";
import Input from "@/components/Input";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";

const PetForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (dataForm: any) => {
    setLoading(true);
    console.log(dataForm);
    createUser(dataForm)
      .then((uid: any) => {
        createProfile(uid, dataForm)
          .then(() => {
            setLoading(false);
            router.push("/home");
          })
          .catch((error) => {
            setLoading(false);
          });
      })
      .catch((error) => {
        setLoading(false);
      });
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
              keyName="pet_name"
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

        <LoadingButton
          sx={{ marginTop: "30px", color: "#fff" }}
          size="medium"
          color="primary"
          type="submit"
          loading={loading}
          variant="contained"
        >
          <span> Crear cuenta</span>
        </LoadingButton>
        {/* <Button
          sx={{ marginTop: "30px", color: "#fff" }}
          type="submit"
          variant="contained"
          size="medium"
        >
          Crear cuenta
        </Button> */}
      </form>
    </Box>
  );
};

export default PetForm;
