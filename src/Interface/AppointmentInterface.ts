// export interface AppointmentInterface = {

// }

export interface DoseDate{
    date: string;
    time: string;
}
export interface Appointment {
    id: string;
    siteLocation: string;
    service: string;
    firstDose: DoseDate;
    secondDose: DoseDate;

  }