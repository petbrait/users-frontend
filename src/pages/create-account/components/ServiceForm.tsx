import { Controller, useForm } from "react-hook-form";
import Input from "@/components/Input";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";

const ServiceForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataForm: any) => {
    console.log(dataForm);
  };

  interface roleOptionsProps {
    value: number;
    label: string;
  }

  const roleOptions: Array<roleOptionsProps> = [
    {
      value: 1,
      label: "Veterinaria",
    },
    {
      value: 2,
      label: "Tienda de productos",
    },
    {
      value: 3,
      label: "Estetica",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Input
              type="text"
              register={register}
              errors={errors}
              keyName="business_name"
              placeholder="Nombre de tu empresa o negocio"
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="role"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormControl
                  size="small"
                  variant="standard"
                  sx={{ fontFamily: "Poppins", padding: 0, marginTop: "-14px" }}
                  fullWidth
                >
                  <InputLabel
                    sx={{ color: "#AAB5BE" }}
                    id="demo-simple-select-label"
                  >
                    Giro
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    error={errors && !!errors.role}
                    label="Giro"
                    {...field}
                  >
                    {roleOptions &&
                      roleOptions.map((role, i) => (
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
            <Input
              type="text"
              register={register}
              errors={errors}
              keyName="address"
              placeholder="Dirección"
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

export default ServiceForm;
