import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Controller, useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import { Title } from "../styles";
import Grid from "@mui/material/Grid";
import Input from "@/components/Input";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";

const Index = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataForm: any) => {
    console.log(dataForm);
  };

  interface statusOptionsProps {
    value: number;
    label: string;
  }

  const statusOptions: Array<statusOptionsProps> = [
    {
      value: 1,
      label: "En casa",
    },
    {
      value: 2,
      label: "Perdido",
    },
    {
      value: 3,
      label: "En adopción",
    },
  ];

  return (
    <Box width={700}>
      <Title>Información de Tiburonsin</Title>
      <Box sx={{ flexGrow: 1, marginTop: "30px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
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
                <Controller
                  name="status"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormControl
                      size="small"
                      variant="standard"
                      sx={{
                        fontFamily: "Poppins",
                        padding: 0,
                        marginTop: "-14px",
                      }}
                      fullWidth
                    >
                      <InputLabel
                        sx={{ color: "#AAB5BE" }}
                        id="demo-simple-select-label"
                      >
                        Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        error={errors && !!errors.role}
                        label="Giro"
                        {...field}
                      >
                        {statusOptions &&
                          statusOptions.map((role, i) => (
                            <MenuItem key={i} value={role.value}>
                              {role.label}
                            </MenuItem>
                          ))}
                      </Select>
                      {errors.role && (
                        <Typography variant="caption">
                          * Selecciona una opción
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Descripción"
                  style={{
                    width: "100%",
                    fontFamily: "Poppins",
                    border: "none",
                    color: "#AAB5BE",
                    borderBottom: "1px solid #767676",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box mt={5}>
            <Title mb={3}>Información de la cuenta</Title>
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <Input
                  type="text"
                  register={register}
                  errors={errors}
                  keyName="owner_name"
                  placeholder="Nombre y apellido"
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  type="text"
                  register={register}
                  errors={errors}
                  keyName="phone_number"
                  placeholder="Teléfono"
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
          </Box>
          <Button
            sx={{ marginTop: "30px", color: "#fff" }}
            type="submit"
            variant="contained"
            size="medium"
          >
            Actualizar
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Index;
