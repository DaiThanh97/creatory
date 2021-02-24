import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import BlockIcon from '@material-ui/icons/Block';

import { formatDate } from './../../utils/date';
import { Chip } from '@material-ui/core';
import { useStyles } from './style';

export default function InfoRow(props) {
    const { data } = props;
    const classes = useStyles();

    const generateTag = () => {
        return data.tags.map((item, index) => {
            return <Chip label={`#${item}`} key={index} className={classes.tag} />
        });
    }

    return (
        <TableRow>
            <TableCell align="center" variant="head" >{data.id + 1}</TableCell>
            <TableCell align="center">{data.guid}</TableCell>
            <TableCell align="center">
                {data.isActive ? <CheckCircleIcon color="secondary" /> : <BlockIcon color="primary" />}
            </TableCell>
            <TableCell align="center">{data.balance}</TableCell>
            <TableCell align="center">{data.age}</TableCell>
            <TableCell align="center">{data.eyeColor}</TableCell>
            <TableCell align="center">{data.firstName}</TableCell>
            <TableCell align="center">{data.lastName}</TableCell>
            <TableCell align="center">
                {data.gender === "male" ? <Chip label="Male" color="primary" /> : <Chip label="Female" color="secondary" />}
            </TableCell>
            <TableCell align="center">{data.email}</TableCell>
            <TableCell align="center" style={{ minWidth: 150 }}><Chip label={data.phone} /></TableCell>
            <TableCell style={{ minWidth: 250 }}>{data.about}</TableCell>
            <TableCell align="center">{formatDate(data.registered)}</TableCell>
            <TableCell align="center">{data.latitude}</TableCell>
            <TableCell align="center">{data.longitude}</TableCell>
            <TableCell style={{ minWidth: 300 }}>{generateTag()}</TableCell>
        </TableRow>
    )
}
