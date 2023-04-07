import React, { useState } from 'react';
import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';
import useStyles from './templateSongsStyles';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddSongToPlaylist from 'components/iconAaddSongToPlaylist/iconAddSongToPlaylist';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery, gql } from '@apollo/client';
import Song from 'models/interface/song';
import { statusSlider } from 'redux/store';
import { changeStatus, currentSlider } from 'redux/slice/statusSlider';

// import { LicenseInfo } from '@mui/x-data-grid-pro';
// LicenseInfo.setLicenseKey(
//     '6239d8e4e4e446a3d208d638ff7603bdT1JERVI6Um9tLVR1c3QsRVhQSVJZPTIyMjMwNjEyMDAwMDAsS0VZVkVSU01PTj0x'
// );
const GET_USERS = gql`
    query MyQuery {
        allSongs {
            nodes {
                id
                name
                duration
                artistByArtistId {
                    name
                }
            }
        }
    }
`;

const TemplateSongs: React.FC = () => {
    const { classes } = useStyles();
    const dispatch = useDispatch();
    const [songs, setSongs] = useState<Song[]>([]);

    const status = useSelector((state: statusSlider) => state.statusSlider);

    function handleClick() {
        dispatch(changeStatus(!status.status));
    }

    useQuery(GET_USERS, {
        onCompleted: (data) => {
            setSongs(data.allSongs.nodes);
        },
    });
    console.log(songs);

    const rows = songs.map((item) => ({
        id: item.id,
        song: item.name,
        duration: item.duration,
        name_artist: item.artistByArtistId.name,
    }));

    const columns: GridColDef[] = [
        {
            field: 'song',
            headerName: 'Song',
            width: 200,
            sortable: false,
            resizable: false,
            headerClassName: classes.headerDataGrid,
            headerAlign: 'left',
        },
        {
            field: 'duration',
            headerName: 'Duration',
            width: 150,
            sortable: false,
            resizable: false,
            headerClassName: classes.headerDataGrid,
            headerAlign: 'left',
        },
        {
            field: 'name_artist',
            headerName: 'Artist',
            width: 200,
            sortable: false,
            resizable: false,
            headerClassName: classes.headerDataGrid,
            headerAlign: 'left',
        },
        {
            field: 'menu',
            headerName: '',
            headerClassName: classes.headerDataGrid,
            sortable: false,
            resizable: false,
            width: 50,
            headerAlign: 'left',
            renderCell: () => {
                return (
                    <div>
                        <AddSongToPlaylist />
                    </div>
                );
            },
        },
        {
            field: 'favorites',
            headerName: '',
            headerClassName: classes.headerDataGrid,
            sortable: false,
            resizable: false,
            width: 50,
            headerAlign: 'left',
            renderCell: () => {
                return <FavoriteBorderIcon />;
            },
        },
    ];

    return (
        <div className={classes.fieldContainer}>
            <div className={classes.header}>רשימת השירים</div>
            <DataGridPro
                onCellClick={handleClick}
                className={classes.dataGride}
                disableColumnMenu
                rows={rows}
                columns={columns}
                hideFooter
                hideFooterRowCount
                hideFooterPagination
                hideFooterSelectedRowCount
            />

            <div className={classes.addSongBtnContainer}>
                <Button variant="contained" className={classes.addSongBtn}>
                    + צור שיר
                </Button>
            </div>
        </div>
    );
};

export default TemplateSongs;
