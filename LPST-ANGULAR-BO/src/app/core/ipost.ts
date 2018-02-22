// import {Iuser} from './iuser';
export interface Ipost {
    id?: number;
    title: string;
    img: string;
    desc: string;
    text: string;
    userId: number;
    online: boolean;
    level: number;
    tagIds: number[];
    // user?: Iuser;
}
