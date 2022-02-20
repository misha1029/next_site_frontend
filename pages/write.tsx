import React from 'react';
import {Button, Input} from "@material-ui/core";

import dynamic from "next/dynamic";
import {NextPage} from "next"
import { TextField } from '@material-ui/core'
 import {MainLayout} from '../layouts/MainLayout';
import { WriteForm } from '../components/WriteForm';



const WritePage: NextPage = () => {
  return (
    
    <MainLayout className = "write-layout-write" hideMenu hideComments>
        <WriteForm/>
    </MainLayout>
  );
};

export default WritePage;