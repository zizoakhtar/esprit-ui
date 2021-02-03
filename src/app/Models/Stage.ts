import {User} from './User';

export class Stage {
  public id: number;
  // public Enseig_stage;
  //public Enseig_option;
  public stagiaire:User;
  public etablissement:string;
  public adresse: string;
  public adresse_electro:string;
  public status: boolean;
  public enc_entreprise:string;
  public mail_enc_entreprise:string;
  public dateDeb:Date;
  public datefin:Date;
  public theme:string;
  // public  note_jury ;
  // public  note_entrep ;
  // public  note_univ ;
  //public fiche_pfe;


}
