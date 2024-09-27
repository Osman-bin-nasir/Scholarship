const scholarships = [
    {
        name: 'National Scholarship for Higher Education',
        category: 'merit',
        location: 'Delhi',
        description: 'A merit-based scholarship for top-performing students.',
    },
    {
        name: 'State Government Need-based Scholarship',
        category: 'need',
        location: 'Maharashtra',
        description: 'A need-based scholarship for economically disadvantaged students.',
    },
    {
        name: 'Minority Welfare Scholarship',
        category: 'minority',
        location: 'Karnataka',
        description: 'A scholarship to support students from minority communities.',
    },
    {
        name: 'Merit Scholarship for Engineering Students',
        category: 'merit',
        location: 'Hyderabad',
        description: 'A merit-based scholarship for students pursuing engineering.',
    },
];

function findScholarships() {
    const category = document.getElementById('category').value;
    const location = document.getElementById('location').value.toLowerCase();

    const filteredScholarships = scholarships.filter(scholarship => {
        const matchCategory = category === 'all' || scholarship.category === category;
        const matchLocation = location === '' || scholarship.location.toLowerCase().includes(location);
        return matchCategory && matchLocation;
    });

    displayScholarships(filteredScholarships);
}

function displayScholarships(scholarships) {
    const scholarshipList = document.getElementById('scholarshipList');
    scholarshipList.innerHTML = '';

    if (scholarships.length === 0) {
        scholarshipList.innerHTML = '<li>No scholarships found. Please refine your search.</li>';
        return;
    }

    scholarships.forEach(scholarship => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${scholarship.name}</strong><br>${scholarship.description}<br><em>Location: ${scholarship.location}</em>`;
        scholarshipList.appendChild(li);
    });
}
