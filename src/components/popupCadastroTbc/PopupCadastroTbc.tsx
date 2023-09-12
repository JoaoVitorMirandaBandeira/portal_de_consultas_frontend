import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField,SelectChangeEvent  } from "@mui/material";
import { Close, Save, Visibility, VisibilityOff } from '@mui/icons-material';
import styled from "styled-components";
import { ChangeEvent, FormEvent, useState } from "react";
import { TTbc } from "@/@types/TTbc";
import { createTbc } from "@/functions/createTbc";

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1.25rem;
`;
type PropsPopup = {
    onClickPopup: (arg: boolean) => void,
    handleFather: () => void,
    userId :string
}

export default function PopupCadastroTbc({ onClickPopup, userId, handleFather }:PropsPopup) {
    const [dataForm, setDataForm] = useState<TTbc>({
        description:'',
        username:'',
        password:'',
        cod_coligada: 0,
        cod_sistema:'',
        tbc:'',
        homolog: true,
        cod_filial:'1'
    })

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target
        setDataForm((prevData) => ({
            ...prevData,
            [name]:value
        }))
    }
    const handleSelectChange = (event:SelectChangeEvent) => {
        const {name,value} = event.target
        setDataForm((prevData) => ({
            ...prevData,
            [name]:value
        }))
    }
    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(userId,dataForm)
        await createTbc({userId,dataForm})
        onClickPopup(false)
        await handleFather()
    }
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)
    return (
        <div className="bg-primaryRubeus-transparente bg-opacity-50 z-50 h-[100%] w-screen fixed flex justify-center items-center">
            <div className="bg-gray-400 rounded-t-md w-[27rem]">
                <div className="flex justify-between items-center px-2 bg-primaryRubeus-navPopup  rounded-t-md h-10">
                    <h2 className="font-bold text-primaryRubeus-gray">Adicionar um novo TBC</h2>
                    <button className="w-5 h-7 text-xl text-primaryRubeus-gray" onClick={() => { onClickPopup(false) }}><Close /></button>
                </div>
                <div className="bg-white">
                    <form className="flex flex-col justify-between h-[100%]" onSubmit={handleFormSubmit} >
                        <div className="flex justify-center mt-5">
                            <TextField id="description" label="Descrição" variant="filled" sx={{ width: '90%' }} name="description" value={dataForm.description} onChange={handleInputChange} required/>
                        </div>
                        <FlexContainer >
                            <TextField id="username" label="Usuario" sx={{ width: '40%' }} variant="filled" type="text"  name="username" value={dataForm.username} onChange={handleInputChange} required/>
                            <TextField
                                label="Senha"
                                id="password"
                                variant="filled"
                                type={showPassword ? 'text' : 'password'}
                                sx={{ width: '40%' }}
                                name="password"
                                value={dataForm.password}
                                onChange={handleInputChange}
                                required
                                InputProps={{
                                    endAdornment: <InputAdornment position="end"><IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        /*onMouseDown={handleMouseDownPassword}*/
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton></InputAdornment>,
                                }}
                            />
                        </FlexContainer >
                        <FlexContainer >
                            <TextField id="codcoligada" label="Cod. Coligada" sx={{ width: '40%' }} variant="filled" type="number" inputProps={{ min: 0 }} name="cod_coligada" value={dataForm.cod_coligada} onChange={handleInputChange} required />
                            <FormControl id="sistema" variant="filled" sx={{ minWidth: '40%' }}>
                                <InputLabel id="demo-simple-select-filled-label">Sistema</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    name="cod_sistema"
                                    value={dataForm.cod_sistema}
                                    onChange={handleSelectChange}
                                    required
                                >
                                    <MenuItem value={'S'}>S</MenuItem>
                                </Select>
                            </FormControl>
                        </FlexContainer >
                        <FlexContainer className="items-center mb-5" >
                            <TextField id="tbc" label="Link TBC" variant="filled" sx={{width: '60%' }} name="tbc" value={dataForm.tbc} onChange={handleInputChange} required/>
                            <Button variant="outlined" style={{ fontWeight: 700,color:'#0da6a6', height:36  }}>Validar</Button>
                        </FlexContainer >
                        <div className="h-[50px]">
                            <hr className="pb-1" />
                            <div className="flex justify-end pr-3">
                                <Button variant="contained" style={{ backgroundColor: '#0DA6A6', fontWeight: 700 }} type="submit"><Save sx={{ fontSize: '21px', paddingRight: '6px' }} />Salvar</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

