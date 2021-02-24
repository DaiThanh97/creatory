import React, { useEffect, useState, memo } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoActSaga } from '../../redux/actions/user.action';
import { TableHead } from '@material-ui/core';
import InfoRow from '../../components/InfoRow';
import { useStyles } from './style';

const tableHeader = [
    "ID",
    "GUID",
    "Active",
    "Balance",
    "Age",
    "Eye Color",
    "First Name",
    "Last Name",
    "Gender",
    "Email",
    "Phone",
    "About",
    "Registered",
    "Latitude",
    "Longtitude",
    "Tags"
];

function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const { totalInfo, listInfo } = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(getInfoActSaga(page, rowsPerPage));
    }, [dispatch]);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        dispatch(getInfoActSaga(newPage * rowsPerPage, rowsPerPage));
    };

    const handleChangeRowsPerPage = (event) => {
        const rows = parseInt(event.target.value, 10)
        setRowsPerPage(rows);
        setPage(0);
        dispatch(getInfoActSaga(0, rows));
    };

    const generateListInfo = () => {
        return listInfo.map((item, index) => {
            return <InfoRow key={index} data={item} />
        });
    };

    const generateTableHeader = () => {
        return tableHeader.map((item, index) => {
            return <TableCell align="center" key={index}>{item}</TableCell>
        });
    }

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {generateTableHeader()}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {generateListInfo()}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={totalInfo}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default memo(Home);