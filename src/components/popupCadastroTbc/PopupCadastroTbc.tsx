import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import {Close, Save} from '@mui/icons-material';

export default function PopupCadastroTbc({ onClickPopup }: { onClickPopup: (arg: boolean) => void }) {
    return (
        <div className="bg-white bg-opacity-50 z-50 h-[100%] w-screen fixed flex justify-center items-center">
            <div className="bg-gray-400 rounded-t-lg w-[27rem]">
                <div className="flex justify-end bg-gray-300  rounded-t-lg">
                    <button className="w-7 h-7 text-xl" onClick={() => { onClickPopup(false) }}><Close/></button>
                </div>
                <div className="bg-gray-200  h-[16.5rem]">
                    <h2 className="font-extrabold text-center pt-4 text-primaryRubeus-gray">Adicionar um novo TBC</h2>
                    <form className="flex flex-col justify-between" >
                        <div className="flex justify-around mt-5">
                            <TextField id="tbc" label="Link TBC" variant="filled" />
                            <FormControl id="sistema" variant="filled" sx={{ minWidth: 130 }}>
                                <InputLabel id="demo-simple-select-filled-label">Sistema</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                >
                                    <MenuItem value={'S'}>S</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="flex justify-around mt-5">
                            <TextField id="description" label="Descrição" variant="filled" />
                            <TextField id="codcoligada" label="Cod. Coligada" sx={{width:130}} variant="filled" type="number" inputProps={{ min: 0 }} />
                        </div>
                    <div className="flex justify-end mt-5 pr-5">
                            <Button variant="contained" style={{ backgroundColor: '#0DA6A6', fontWeight: 800 }}><Save sx={{ fontSize: 'medium'}}/>Salvar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}