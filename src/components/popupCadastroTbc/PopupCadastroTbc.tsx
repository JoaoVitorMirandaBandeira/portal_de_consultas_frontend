import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Close, Save } from '@mui/icons-material';
import styled from "styled-components";

export const FlexContainer  = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1.25rem;
`;


export default function PopupCadastroTbc({ onClickPopup }: { onClickPopup: (arg: boolean) => void }) {
    return (
        <div className="bg-primaryRubeus-transparente bg-opacity-50 z-50 h-[100%] w-screen fixed flex justify-center items-center">
            <div className="bg-gray-400 rounded-t-md w-[27rem]">
                <div className="flex justify-between items-center px-2 bg-primaryRubeus-navPopup  rounded-t-md h-10">
                    <h2 className="font-bold text-primaryRubeus-gray">Adicionar um novo TBC</h2>
                    <button className="w-5 h-7 text-xl text-primaryRubeus-gray" onClick={() => { onClickPopup(false) }}><Close /></button>
                </div>
                <div className="bg-white">
                    <form className="flex flex-col justify-between h-[100%]" >
                        <div className="flex justify-center mt-5">
                            <TextField id="description" label="Descrição" variant="filled" sx={{width: '90%'}} />
                        </div>
                        <FlexContainer >
                            <TextField id="username" label="Usuario" sx={{ width: '40%' }} variant="filled" type="text" />
                            <TextField id="password" label="Senha" sx={{width: '40%' }} variant="filled" type="password" />
                        </FlexContainer >
                        <FlexContainer >
                            <TextField id="codcoligada" label="Cod. Coligada" sx={{width: '40%' }} variant="filled" type="number" inputProps={{ min: 0 }} />
                            <FormControl id="sistema" variant="filled" sx={{ minWidth: '40%' }}>
                                <InputLabel id="demo-simple-select-filled-label">Sistema</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                >
                                    <MenuItem value={'S'}>S</MenuItem>
                                </Select>
                            </FormControl>
                        </FlexContainer >
                        <FlexContainer className="items-center mb-5" >
                            <TextField id="tbc" label="Link TBC" variant="filled" sx={{width: '60%' }} />
                            <Button variant="outlined" style={{ fontWeight: 700,color:'#0da6a6', height:36  }}>Validar</Button>
                        </FlexContainer >
                        <div className="h-[50px]">
                            <hr className="pb-1" />
                            <div className="flex justify-end pr-3">
                                <Button variant="contained" style={{ backgroundColor: '#0DA6A6', fontWeight: 700 }}><Save sx={{ fontSize: '21px', paddingRight: '6px' }} />Salvar</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}