import './polyfills';
import 'zone.js/dist/zone';

import { bootstrapWorkerUi } from '@angular/platform-webworker';

bootstrapWorkerUi('./client.js');