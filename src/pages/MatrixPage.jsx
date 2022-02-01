import React from 'react';
import { useState, useEffect } from "react";
import styled from 'styled-components';


const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: 100px !important;
    width: 100%;
    border: 1px solid black
`;

const Column = styled.div`
    background-color: red;
    height: 120 !important;
    width: 25%;
    border: 1px solid black;
    color: white;
    background-color: blue;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;`
    ;



export default function MatrixPage() {
    const [state, setState] = useState();

    useEffect(() => {
        setState({ row: Array(4).fill("").map(row => new Array(4).fill("")), selectedRow: [] });
    }, []);

    const selectedRow = async (boxRowIndex, boxColoumnIndex, event) => {
        let selectionValue = state.row;
        if (selectionValue[boxRowIndex][boxColoumnIndex] == "") {
            let selectedBoxCount = await findCount();
            selectionValue[boxRowIndex][boxColoumnIndex] = "Box " +
                selectedBoxCount;
            await this.setSelecteRow("Box " + selectedBoxCount)
            setState(...state,{ row: selectionValue })
        }
    }

    const setSelecteRow = async (BoxValue) => {
        let boxDetails = selectedRow;
        if (boxDetails.length == 2) {
            boxDetails.shift();
        }
        boxDetails.push(BoxValue)
        setState(...state,{ selectedRow: boxDetails })
    }

    const findCount = async () => {
        let count = 1;
        state.row.map(items => {
            items.map(subItems => {
                if (subItems != "")
                    count++;
            })
        })
        return count;
    }
    return (

        <>
            <Row>

                {state.row.map((items, index) => {
                    return (
                        <Row key={index}>
                            {items.map((item, itemIndex) => {
                                // return (
                                //     <div
                                //         {state.selectedRow.includes(itemIndex) && <Column />}
                                //         onClick={selectedRow.bind(item, index, itemIndex)} key={itemIndex}>
                                //         {item}
                                //     </div>
                                // )
                            })}
                        </Row>
                    )
                })}

            </Row>
        </>
    )
}
