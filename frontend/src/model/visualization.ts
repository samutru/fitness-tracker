export interface Dataset {
    label: string;
    backgroundColor: string;
    data: number[];
  }
  
  export interface Visualization {
    labels: string[];
    datasets: Dataset[];
  }