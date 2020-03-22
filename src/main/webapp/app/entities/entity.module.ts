import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: () => import('./region/region.module').then(m => m.MituRegionModule)
      },
      {
        path: 'country',
        loadChildren: () => import('./country/country.module').then(m => m.MituCountryModule)
      },
      {
        path: 'location',
        loadChildren: () => import('./location/location.module').then(m => m.MituLocationModule)
      },
      {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.MituDepartmentModule)
      },
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then(m => m.MituTaskModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.MituEmployeeModule)
      },
      {
        path: 'job',
        loadChildren: () => import('./job/job.module').then(m => m.MituJobModule)
      },
      {
        path: 'job-history',
        loadChildren: () => import('./job-history/job-history.module').then(m => m.MituJobHistoryModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class MituEntityModule {}
