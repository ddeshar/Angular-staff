import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService{

  constructor() { }
  createDb(){
	
   let  contacts =  [
    {  id:  1, name:  'Arpaporn Thipjaksu', email: 'Jaa_arpaporn@hotmail.com', tel: '0906697271', project: 'The Line Asoke-Ratchada', RoomNo: '585/299', Sales: 'Sumitra Jirawat', Price: '', BankName: '', AccNo: '', AccName: ''},
    {  id:  2, name:  'Chenanya Wattanasiri', email: 'chenanya.w@hotmail.com', tel: '0910855248', project: 'Park24 Condominium', RoomNo: '70/470', Sales: 'Jutarat Preedee', Price: '', BankName: '', AccNo: '', AccName: ''},
    {  id:  3, name:  'Ladda Pongputaruk', email: 'kae_ladda@gmail.com', tel: '0914040808', project: 'Niche Mono SKV50', RoomNo: '1184/334', Sales: 'Jutarat Preedee', Price: '', BankName: '', AccNo: '', AccName: ''},
    {  id:  4, name:  'Narongsak Chayasoontorn', email: 'narongsak.cha@gmail.com', tel: '0897994864', project: 'Niche Mono SKV50', RoomNo: '1184/381', Sales: 'Thamma Rungjaroen', Price: '', BankName: '', AccNo: '', AccName: ''},
    {  id:  5, name:  'Orawan Naruepakorn', email: 'karn.oraw@gmail.com', tel: '0617123287	Park24', project: 'Condominium', RoomNo: '68/12', Sales: 'Thamma Rungjaroen', Price: '', BankName: '', AccNo: '', AccName: ''},
    {  id:  6, name:  'Pinpattama Teenapat', email: 'balloon_pinpa@gmail.com', tel: '0914040808', project: 'Park24 Condominium', RoomNo: '70/472', Sales: 'Sumitra Jirawat', Price: '', BankName: '', AccNo: '', AccName: ''},
    {  id:  7, name:  'Prapat Kengpulsup', email: 'pp.kengp@hotmail.com', tel: '0886519451', project: 'The Line Asoke-Ratchada', RoomNo: '585/291', Sales: 'Jutarat Preedee', Price: '', BankName: '', AccNo: '', AccName: ''},
    {  id:  8, name:  'Vikarn Teerarattananukul', email: 'vikarn@msn.com', tel: '0912075379', project: 'Park24 Condominium', RoomNo: '70/471', Sales: 'Jutarat Preedee', Price: '', BankName: '', AccNo: '', AccName: ''},
    {  id:  9, name:  'Weerawon Inboonsom', email: 'weerawon_tum@gmail.com', tel: '0890469257', project: 'Life Asoke', RoomNo: '46/987', Sales: 'Tiptida Buaphan', Price: '', BankName: '', AccNo: '', AccName: ''},
    {  id:  10,name:  'Wilai Pansupeepat', email: 'wilai.pan@hotmail.com', tel: '0883455500', project: 'Park24 Condominium', RoomNo: '68/370', Sales: 'Sumitra Jirawat', Price: '', BankName: '', AccNo: '', AccName: ''}
   ];
   return {contacts};
	
  }
}
