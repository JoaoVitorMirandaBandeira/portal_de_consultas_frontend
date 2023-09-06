import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Close, Save } from '@mui/icons-material';

export default function PopupCadastroTbc({ onClickPopup }: { onClickPopup: (arg: boolean) => void }) {
    return (
        <div className="bg-primaryRubeus-transparente bg-opacity-50 z-50 h-[100%] w-screen fixed flex justify-center items-center">
            <div className="bg-gray-400 rounded-t-md w-[27rem]">
                <div className="flex justify-between items-center px-2 bg-primaryRubeus-navPopup  rounded-t-md h-10">
                    <h2 className="font-bold text-primaryRubeus-gray">Adicionar um novo TBC</h2>
                    <button className="w-5 h-7 text-xl text-primaryRubeus-gray" onClick={() => { onClickPopup(false) }}><Close /></button>
                </div>
                <div className="bg-white  h-[16.5rem]">
                    <form className="flex flex-col justify-between h-[100%]" >
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
                            <TextField id="codcoligada" label="Cod. Coligada" sx={{ width: 130 }} variant="filled" type="number" inputProps={{ min: 0 }} />
                        </div>
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