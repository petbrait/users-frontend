import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { logIn } from "@/core/api";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Input from "@/components/Input";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import InfoBanner from "@/pages/create-account/components/InfoBanner";

const Index = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (dataForm: any) => {
    console.log(dataForm);
    setLoading(true);
    logIn(dataForm)
      .then(() => {
        setLoading(false);
        router.push("/home");
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <InfoBanner />
        </Grid>
        <Grid item xs={8}>
          <Box mt={10}>
            <Typography variant="h4" mb={2}>
              Iniciar sesión
            </Typography>
            <Box
              sx={{
                width: "70%",
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={5}>
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
                  <span>Entrar</span>
                </LoadingButton>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
