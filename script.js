function validateForm() {
    const caseNumber = document.getElementById('caseNumber').value.trim();
    const caseTitle = document.getElementById('caseTitle').value.trim();
    const plaintiffName = document.getElementById('plaintiffName').value.trim();
    const defendantName = document.getElementById('defendantName').value.trim();
    const courtDate = document.getElementById('courtDate').value;
    const caseDescription = document.getElementById('caseDescription').value.trim();

    if (!caseNumber || !caseTitle || !plaintiffName || !defendantName || !courtDate || !caseDescription) {
        alert('All fields are required.');
        return false;
    }

    const caseNumberPattern = /^[A-Za-z0-9]+$/;
    if (!caseNumberPattern.test(caseNumber)) {
        alert('Case Number should contain only alphanumeric characters.');
        return false;
    }

    if (caseTitle.length < 5 || caseTitle.length > 100) {
        alert('Case Title must be between 5 and 100 characters.');
        return false;
    }

    if (plaintiffName.length < 3 || plaintiffName.length > 50) {
        alert('Plaintiff Name must be between 3 and 50 characters.');
        return false;
    }

    if (defendantName.length < 3 || defendantName.length > 50) {
        alert('Defendant Name must be between 3 and 50 characters.');
        return false;
    }

    const today = new Date().toISOString().split('T')[0];
    if (courtDate < today) {
        alert('Court Date cannot be in the past.');
        return false;
    }

    if (caseDescription.length < 10 || caseDescription.length > 1000) {
        alert('Case Description must be between 10 and 1000 characters.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}
