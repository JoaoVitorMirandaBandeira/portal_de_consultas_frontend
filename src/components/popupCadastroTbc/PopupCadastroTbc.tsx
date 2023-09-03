import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function PopupCadastroTbc({ onClickPopup }: { onClickPopup: (arg: boolean) => void }) {
    return (
        <div className="bg-white bg-opacity-50 z-50 h-[100%] w-screen fixed flex justify-center items-center">
            <div className="bg-gray-400 rounded-t-lg w-2/4 ">
                <div className="flex justify-end bg-gray-300 rounded-t-lg">
                    <button className="w-7 h-7 text-xl" onClick={() => { onClickPopup(false) }}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <div className="bg-gray-200 ">
                    <form >
                        <TextField id="tbc" label="Link TBC" variant="filled"/>
                        <TextField id="description" label="Descrição" variant="filled" />
                        <TextField id="codcoligada" label="Cod. Coligada" variant="filled" type="number" inputProps={{ min: 0 }} />
                        <FormControl id="sistema" variant="filled" sx={{ minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-filled-label">Sistema</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                            >
                                <MenuItem value={'S'}>S</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </div>
            </div>
        </div>
    )
}