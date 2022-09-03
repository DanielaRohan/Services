import axios from "axios";
import { useState,useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory, {Type} from 'react-bootstrap-table2-editor';
import filterFactory,{textFilter} from 'react-bootstrap-table2-filter';

    export const AutoMechanic = function () {
      const [data, setData] = useState([])
      useEffect(()=>{
          getData()
      },[])
      const getData = ()=> {
          axios( "https://jsonplaceholder.typicode.com/comments" ).then((res) =>
         { console.log(res.data);
          setData(res.data)}
          );
      };
      const emailFormater = ( data, row )=>{
          return <>
          Email:{data}
          </>
      }
      const selectRow = {
          mode: "checkbox",
          clickToSelect: true,
          clickToEdit: true,
      }
      const columns = [
          { dataField: "email",
            text: "Email",
            sort:true,
            formatter: emailFormater
          },
          { dataField: "postId",
            text: "Product ID",
            sort:true
          },
          { dataField: "name",
            text: "Name",
            filter: textFilter(),
            editor: {
              type: Type.SELECT,
              options: [
                  {
                      value: 'A',
                      label: 'A',
                  },
                  {
                      value: 'B',
                      label: 'B',
                  },
              ]
            }
          },
          { dataField: "id",
          text: "Dropdown",
          sort:true
          },
                      
  ]
      return (
          <div className="page-accountancy">
              <BootstrapTable keyField="id"
                              data={data}
                              columns={columns}
                              striped
                              hover
                              condensed
                              pagination={paginationFactory ()}
                              cellEdit={cellEditFactory({
                                  mode:"dbclick",
                                  blurToSave: true,
                              })}
                              selectRow = {selectRow}
                              filter={filterFactory()}
                               />
          </div>
      )
  } 
  
