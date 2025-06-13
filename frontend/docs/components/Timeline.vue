<script setup>
import { ref, computed, watch } from 'vue';

const timelineEvents = ref([
  // Personal
  { year: 2023, date: '2023-01-01', type: 'Personal', company: 'N/A', title: 'Got Married & Moved to Singapore', description: 'Started a new co-op campaign by getting married and relocating to a new server: Singapore.' },
  
  // Professional
  { year: 2012, date: '2012-06-01', type: 'Professional', company: 'Moonlay Technologies', title: 'Started Career as Full Stack Developer', description: 'Kicked off my tech career, learning to build robust applications from the ground up.' },
  { year: 2015, date: '2015-01-01', type: 'Professional', company: 'Moonlay Technologies', title: 'Shifted to Project Management', description: 'Traded my compiler for a Gantt chart and transitioned from code to coordination, leading projects to successful completion.' },
  { year: 2016, date: '2016-01-01', type: 'Professional', company: 'Moonlay Technologies', title: 'Launched JetExpress Core System', description: 'Led the charge in launching the JetExpress core system, the digital backbone for a major logistics operation.' },
  { year: 2017, date: '2017-01-01', type: 'Professional', company: 'Moonlay Technologies', title: 'Best Employee & PM Shift', description: 'Recognized as Best Employee and pivoted into Project Management' },
  { year: 2017, date: '2017-06-01', type: 'Professional', company: 'QRIM Express', title: 'Joined Red Carpet Logistics', description: 'Began a new chapter at Red Carpet Logistics (which later became QRIM Express), diving into new challenges in the logistics world as Product Manager. Aligning my passion for tech with user-centric solutions.' },
  { year: 2019, date: '2019-01-01', type: 'Professional', company: 'QRIM Express', title: 'Won "Mission Impossible" Award', description: 'Honored for being the go-to problem solver who could tackle any challenge, anytime, anywhere. Cue the theme music.' },
  { year: 2020, date: '2020-04-01', type: 'Professional', company: 'QRIM Express', title: 'Experienced a "Surprise Career Pivot"', description: 'Navigated a company-wide retrenchment due to COVID-19 (aka "The Great Reset"). Used the time to recharge, rethink, and bounce back stronger.' },
  { year: 2020, date: '2020-05-01', type: 'Professional', company: 'Anteraja', title: 'Joined Anteraja', description: 'Started a new role at Anteraja, ready to tackle fresh challenges in the logistics space.' },
  { year: 2020, date: '2020-08-01', type: 'Professional', company: 'Anteraja', title: 'Launched Travylite', description: 'Made an immediate impact by launching a new travel-focused service just a few months after joining.' },
  { year: 2021, date: '2021-01-01', type: 'Professional', company: 'Anteraja', title: 'Launched Rinso Collaboration', description: 'Spearheaded a successful partnership with a major brand (Rinso) to promote sustainability and reduce packaging waste.' },
  { year: 2021, date: '2021-07-01', type: 'Professional', company: 'Anteraja', title: 'Promoted to Assistant Manager', description: 'Leveled up! My contributions and leadership were recognized with a promotion.' },
  { year: 2023, date: '2023-07-01', type: 'Professional', company: 'Anteraja', title: 'Promoted to Department Head', description: 'Entrusted with leading a department, driving strategy and team growth to new heights.' },
  { year: 2025, date: '2025-01-01', type: 'Professional', company: 'Assa Logistics Ecosystem', title: 'Collaborate with Kedai Sayur', description: 'Continuing to expand my impact by forging a new collaboration in the fast-paced logistics ecosystem.' },
]);

// Filters
const selectedType = ref('All');
const selectedCompany = ref('All');

// When the type filter changes, check if we should reset the company filter.
watch(selectedType, (newType) => {
  if (newType === 'Personal' || newType === 'All') {
    selectedCompany.value = 'All';
  }
});

const companies = computed(() => {
  const professionalEvents = timelineEvents.value.filter(e => e.type === 'Professional');
  const companyNames = professionalEvents.map(e => e.company);
  return ['All', ...new Set(companyNames)];
});

const filteredTimeline = computed(() => {
  return timelineEvents.value
    .filter(event => {
      const typeMatch = selectedType.value === 'All' || event.type === selectedType.value;
      const companyMatch = selectedCompany.value === 'All' || event.company === selectedCompany.value;
      return typeMatch && companyMatch;
    })
    .sort((a, b) => {
        // First sort by year descending, then by date descending to handle same-year events
        if (b.year !== a.year) {
            return b.year - a.year;
        }
        return new Date(b.date) - new Date(a.date);
    });
});

const getIconColor = (type) => {
  return type === 'Personal' ? 'bg-pink-500' : 'bg-indigo-500';
};
</script>

<template>
  <div class="not-prose">
    <!-- Filter Controls -->
    <div class="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div class="flex-1">
        <label for="type-filter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Type</label>
        <select id="type-filter" v-model="selectedType" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option>All</option>
          <option>Personal</option>
          <option>Professional</option>
        </select>
      </div>
      <div class="flex-1">
        <label for="company-filter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Company</label>
        <select id="company-filter" v-model="selectedCompany" :disabled="selectedType === 'Personal'" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md disabled:bg-gray-200 dark:disabled:bg-gray-700/50 disabled:cursor-not-allowed">
          <option v-for="company in companies" :key="company" :value="company">{{ company }}</option>
        </select>
      </div>
    </div>

    <!-- Timeline -->
    <div class="relative border-l border-gray-200 dark:border-gray-700">
      <div v-for="event in filteredTimeline" :key="event.title" class="mb-10 ml-6">
        <span :class="getIconColor(event.type)" class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900">
           <svg v-if="event.type === 'Professional'" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v8a1 1 0 01-1 1h-4.586l-2 2H9.586l-2-2H3a1 1 0 01-1-1V3z"></path></svg>
           <svg v-else class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
        </span>
        <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="items-center justify-between sm:flex">
            <time class="mb-1 text-xs font-normal text-gray-500 sm:order-last sm:mb-0">{{ event.year }}</time>
            <div class="text-lg font-semibold text-gray-900 dark:text-white">{{ event.title }}</div>
          </div>
          <div v-if="event.type === 'Professional'" class="mb-2 text-sm font-normal text-indigo-500 dark:text-indigo-400">{{ event.company }}</div>
          <div class="p-3 text-sm font-normal text-gray-600 bg-gray-50 rounded-lg dark:bg-gray-700 dark:text-gray-300">{{ event.description }}</div>
        </div>
      </div>
       <div v-if="filteredTimeline.length === 0" class="ml-6 text-gray-500 dark:text-gray-400">
        No events match your criteria. Try adjusting the filters!
      </div>
    </div>
  </div>
</template>
